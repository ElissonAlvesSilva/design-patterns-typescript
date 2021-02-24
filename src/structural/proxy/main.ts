import { SystemUserProxy } from './system-user/system-user-proxy';

async function client(): Promise<void> {
  const user = new SystemUserProxy('Elisson', 'elisson.silva');
  console.log('Vai levar 2s');
  console.log(await user.getAddress());
}

client();
