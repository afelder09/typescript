import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList.js';

const numbersCollection = new NumbersCollection([1, 4, 5, 6, 7, -9]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
  'ldskjf;lakj;lkjrakjfclkjrlv'
);
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(-900);
linkedList.print();
linkedList.sort();
linkedList.print();
