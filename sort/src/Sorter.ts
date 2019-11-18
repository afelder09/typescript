interface Sortable {
  length: number;
  compare(i: number, j: number): boolean;
  swap(i: number, j: number): void;
}

export abstract class Sorter {
  abstract compare(i: number, j: number): boolean;
  abstract swap(i: number, j: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
