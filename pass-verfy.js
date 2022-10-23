import bcrypt from 'bcrypt';

const hashPassword = async () => {
  const myPassword = 'admin123@(){,.';
  const hash = '$2b$10$NzFVlqEw9oMBjBsH81vJVO8ezN5U8mfpYTj0ZsHPs3cL5rAUCPxFy';

  const isMatch = await bcrypt.compare(myPassword, hash);

  console.log(isMatch);
}

hashPassword();