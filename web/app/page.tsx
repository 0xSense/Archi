import { HelloWorldIDL } from '@archi/anchor';

export default async function Index() {
  return (
    <div>
      <pre>{JSON.stringify(HelloWorldIDL, null, 2)}</pre>
    </div>
  );
}
