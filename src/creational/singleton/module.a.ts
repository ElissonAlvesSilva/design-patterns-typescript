import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'elisson', age: 30 });
myDatabaseClassic.add({ name: 'eduarda', age: 30 });
myDatabaseClassic.add({ name: 'Elizabeth', age: 30 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();
