import Failure from "../utils/Failure";

export default function it(name: string, fn: () => void) {
  let err = false;
  try {
    fn();
  } catch (msg) {
    err = true;
    if (msg instanceof Failure) {
      console.log(`${name} ha fallito ${msg.message}`);
    }
  } finally {
    if (err === false) {
      console.log("✅ test passato");
    }
  }
}
