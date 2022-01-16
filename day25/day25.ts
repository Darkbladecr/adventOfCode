const { DEBUG } = process.env;

const Char: { [key: string]: IChar } = {
  EMPTY: ".",
  EAST: ">",
  SOUTH: "v",
};

type IChar = "." | ">" | "v";

export class SeaFloor {
  steps: string[] = [];
  floorRows: IChar[][];
  numRows: number;
  numCols: number;

  constructor(data: string) {
    this.steps.push(data);
    this.floorRows = data.split("\n").map((x) => x.split("") as IChar[]);
    this.numRows = this.floorRows.length;
    this.numCols = this.floorRows[0].length;
  }

  toString(floor?: IChar[][]): string {
    if (!floor) {
      floor = this.floorRows;
    }
    return floor.map((row) => row.join("")).join("\n");
  }

  next(): IChar[][] {
    const tmpXRows = this.floorRows.map((y) => [...y]);
    for (let y = 0; y < this.numRows; y++) {
      for (let x = 0; x < this.numCols; x++) {
        if (this.floorRows[y][x] === Char.EAST) {
          if (this._isNextEastCharAvail(x, y, this.floorRows)) {
            let nextX = x + 1;
            if (nextX === this.floorRows[0].length) {
              nextX = 0;
            }
            tmpXRows[y][x] = Char.EMPTY;
            tmpXRows[y][nextX] = Char.EAST;
          }
        }
      }
    }
    if (DEBUG) {
      console.log("[x] prev:");
      console.log(this.toString());
      console.log("[x] next:");
      console.log(this.toString(tmpXRows));
    }

    const tmpYRows = tmpXRows.map((y) => [...y]);

    for (let x = 0; x < this.numCols; x++) {
      for (let y = 0; y < this.numRows; y++) {
        if (tmpXRows[y][x] === Char.SOUTH) {
          if (this._isNextSouthCharAvail(x, y, tmpXRows)) {
            let nextY = y + 1;
            if (nextY === this.floorRows.length) {
              nextY = 0;
            }
            tmpYRows[y][x] = Char.EMPTY;
            tmpYRows[nextY][x] = Char.SOUTH;
          }
        }
      }
    }
    if (DEBUG) {
      console.log("[y] prev:");
      console.log(this.toString(tmpXRows));
      console.log("[y] next:");
      console.log(this.toString(tmpYRows));
    }
    this.floorRows = tmpYRows;
    this.steps.push(this.toString(tmpYRows));
    return this.floorRows;
  }

  end(): number {
    this.next();
    let lastIdx = this.steps.length - 1;
    while (this.steps[lastIdx - 1] !== this.steps[lastIdx]) {
      lastIdx++;
      this.next();
    }
    this.steps.pop();
    return lastIdx;
  }

  _isNextCharAvail(nextChar: IChar): boolean {
    if (nextChar === Char.EAST) {
      return false;
    } else if (nextChar === Char.SOUTH) {
      return false;
    } else if (nextChar === Char.EMPTY) {
      return true;
    } else {
      throw new Error(`Unknown Char: ${nextChar}`);
    }
  }

  _isNextEastCharAvail(x: number, y: number, floorRows: IChar[][]): boolean {
    let nextX = x + 1;
    if (nextX === floorRows[0].length) {
      nextX = 0;
    }
    const nextEastChar = floorRows[y][nextX];
    return this._isNextCharAvail(nextEastChar);
  }
  _isNextSouthCharAvail(x: number, y: number, floorRows: IChar[][]): boolean {
    let nextY = y + 1;
    if (nextY === floorRows.length) {
      nextY = 0;
    }
    const nextSouthChar = floorRows[nextY][x];
    return this._isNextCharAvail(nextSouthChar);
  }
}
