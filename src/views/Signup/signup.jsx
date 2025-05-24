import { useState, useEffect } from 'react';

export default function Register({ onSubmit = () => {} }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  useEffect(() => {
    const newErrors = {};

    if (touched.email) {
      if (!email) newErrors.email = 'Email is required.';
      else if (!isValidEmail(email)) newErrors.email = 'Enter a valid email.';
    }

    if (touched.password) {
      if (!password) newErrors.password = 'Password is required.';
      else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    }

    if (touched.confirmPassword) {
      if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password.';
      else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords must match.';
    }

    if (touched.fullName && !fullName) newErrors.fullName = 'Full name is required.';
    if (touched.dob && !dob) newErrors.dob = 'Date of Birth is required.';
    if (touched.gender && !gender) newErrors.gender = 'Please select your gender.';

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [email, password, confirmPassword, fullName, dob, gender, touched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true, confirmPassword: true, fullName: true, dob: true, gender: true });

    if (isFormValid) {
      const userData = { email, password, fullName, dob, gender };
      console.log("User Registered:", userData);
      localStorage.setItem('userInfo', JSON.stringify(userData));
      alert('Registration successful!');
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center">
      <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
      <div className="mx-5 my-4 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_20px_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
        <div className="flex flex-col p-6">
          <h1 className="text-xl font-semibold leading-6">Register Yourself</h1>
          <p className="mt-1.5 text-md font-medium text-white/50 italic">Please fill out the form to register.</p>

          <form className="p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-green-500 text-md font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-[337px] h-[40px] px-4 border border-gray-300 rounded-lg text-sm"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={() => handleBlur('fullName')}
                placeholder="Your full name"
              />
              {errors.fullName && <div className="text-red-500 text-sm mt-1">{errors.fullName}</div>}
            </div>

            <div className="mb-4">
              <label className="block text-green-500 text-md font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-[337px] h-[40px] px-4 border border-gray-300 rounded-lg text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="you@example.com"
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>

            <div className="mb-4">
              <label className="block text-green-500 text-md font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-[337px] h-[40px] px-4 border border-gray-300 rounded-lg text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur('password')}
                placeholder="Enter a strong password"
              />
              {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
            </div>

            <div className="mb-4">
              <label className="block text-green-500 text-md font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-[337px] h-[40px] px-4 border border-gray-300 rounded-lg text-sm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => handleBlur('confirmPassword')}
                placeholder="Re-enter your password"
              />
              {errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>}
            </div>


            <button
              type="submit"
              className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isFormValid}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
