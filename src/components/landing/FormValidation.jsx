export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const validateMobileNumber = (mobileNumber) => {
  const mobilePattern = /^[0-9]{10}$/;
  return mobilePattern.test(mobileNumber);
};
