interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary() {
    return 'This is an old ass civic';
  }
};

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return 'This is a drink';
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
