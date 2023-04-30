import fs from 'fs';

const name = process.argv[2];

if (name === undefined) {
  console.log('SCRIPT: cc');
  console.log('NAME: create component');
  console.log('-------------------------');
  console.log('EXAMPLE: npm run cc Info');
  console.log('RESULT: creates component /src/components/Info.tsx');
  process.exit();
} else {
  const content = `
export const ${name} = () => {
  return (
    <>
      <p>Welcome to the ${name} component.</p>
    </>
  );
};
    `;
  (async () => {
    fs.writeFile(`./src/components/${name}.tsx`, content.trim(), () => {});
  })();
}
