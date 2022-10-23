import bcrypt from 'bcrypt';

const myPassword = 'admin123@(){,.';


const hashPassword = async () => {
  const hash = await bcrypt.hash(myPassword, 10);

  console.log(hash);
  console.log(hash);
  console.log(hash);

}

hashPassword();

