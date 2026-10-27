const rawEnv = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
};

type Env = Record<keyof typeof rawEnv, string>;

function check(env: object): env is Env {
  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) {
      throw new Error(`Critical Setup Error: Environment variable "${key}" is missing.`);
    }
  }
  return true;
}

if (!check(rawEnv)) {
  throw new Error();
}

const env: Env = rawEnv;
console.log(`Resolved Environment Configuration Successfully`);

export default env;
