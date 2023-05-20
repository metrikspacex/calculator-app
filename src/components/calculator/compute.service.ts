import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ComputeService {
  /**
   * Not 100% I implemented Shunting Algorithm or RPN correctly..
   */

  private inputStack = "";

  public onDeleteClicked(): void {
    if (this.inputStack === "") {
      return;
    }

    if (!this.check(this.inputStack)) {
      this.inputStack = this.inputStack.slice(0, -3);
      return;
    }

    const _inputStack = this.inputStack.split(" ");
    let changeValue = _inputStack.pop();
    changeValue = changeValue?.slice(0, -1);
    if (changeValue !== undefined) {
      this.inputStack = "";
      for (const item of _inputStack) {
        if (this.check(item)) {
          this.inputStack += item;
        } else {
          this.inputStack += ` ${item} `;
        }
      }
      this.inputStack += changeValue;
    }
  }

  public onEqualClicked(): void {
    if (this.check(this.inputStack) && this.inputStack.split(" ").length >= 3) {
      this.compute();
    }
  }

  public onNumberClicked(value: string): void {
    this.inputStack += value;
  }

  public onOperatorClicked(value: string): void {
    if (this.check(this.inputStack)) {
      this.inputStack += ` ${value} `;
    }
  }

  public onResetClicked(): void {
    this.inputStack = "";
  }

  public output(): string {
    return this.inputStack.replaceAll(" ", "");
  }

  private check(_string: string): boolean {
    return Boolean(
      this.peek(_string) !== "+" &&
        this.peek(_string) !== "-" &&
        this.peek(_string) !== "/" &&
        this.peek(_string) !== "x" &&
        this.peek(_string) !== ""
    );
  }

  private compute(): void {
    const output = this.yard(this.inputStack).join(" ");
    const answer = this.rpn(output).toString();
    console.log(answer);
    if (answer === "Infinity" || answer === "-Infinity") {
      this.inputStack = "";
      return;
    }
    this.inputStack = answer;
  }

  private peek(_string: string): string {
    const _inputStack = _string.replaceAll(" ", "");
    if (_inputStack === "") {
      return "";
    }
    return _inputStack[_inputStack.length - 1];
  }

  private rpn(_string: string): number {
    let _stack: number[] = new Array<number>();
    let _input: string[] = _string.split(" ");

    for (const element of _input) {
      if (this.check(element)) {
        _stack.push(parseFloat(element));
      } else {
        let b = _stack.pop();
        let a = _stack.pop();
        if (a !== undefined && b !== undefined) {
          switch (element) {
            case "+": {
              _stack.push(a + b);
              break;
            }
            case "-": {
              _stack.push(a - b);
              break;
            }
            case "x": {
              console.log(a * b);
              _stack.push(a * b);
              break;
            }
            case "/": {
              _stack.push(a / b);
              break;
            }
            default: {
              break;
            }
          }
        } else {
          return 0;
        }
      }
    }

    return _stack[_stack.length - 1];
  }

  private getPrecedence(_string: string): number {
    if (_string === "+" || _string === "-") {
      return 1;
    } else if (_string === "x" || _string === "/") {
      return 2;
    }
    return -1;
  }

  private yard(infix: string): string[] {
    const _expression = infix.split(" ");
    const _postfix: string[] = new Array<string>();
    const _stack: string[] = new Array<string>();
    const peek = (stack: string[]): string => stack[stack.length - 1];

    for (const token of _expression) {
      if (this.check(token)) {
        _postfix.push(token);
      } else {
        if (_stack.length > 0) {
          if (this.getPrecedence(peek(_stack)) >= this.getPrecedence(token)) {
            const popped = _stack.pop();
            _stack.push(token);
            if (popped !== undefined) {
              _postfix.push(popped);
            }
          } else {
            _stack.push(token);
          }
        } else {
          _stack.push(token);
        }
      }
    }

    for (const operators of _stack.reverse()) {
      _postfix.push(operators);
    }

    return _postfix;
  }
}
