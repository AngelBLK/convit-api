import bcrypt from 'bcrypt';

const hashPassword = async () => {
  const myPassword = '12345678';
  const hash = '$2b$10$hmfWzf8MVu58cor5X7XRgOeaStPAGzdeqwZUXXE6HTKp4x92wyBIa';
  
  const isMatch = await bcrypt.compare(myPassword, hash);

  console.log(isMatch);
}

hashPassword();