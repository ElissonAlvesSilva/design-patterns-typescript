import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Ednelson', age: 30 });
myDatabaseModule.add({ name: 'Joana', age: 30 });
myDatabaseModule.add({ name: 'Luiza', age: 30 });
myDatabaseModule.remove(1);
myDatabaseModule.show();
