import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onSubmit = () => {} }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  useEffect(() => {
    const newErrors = {};

    if (touched.email) {
      if (!email) newErrors.email = 'Email is required.';
      else if (!isValidEmail(email)) newErrors.email = 'Email must be a valid email.';
    }

    if (touched.password) {
      if (!password) newErrors.password = 'Password is required.';
      else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [email, password, touched]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setErrors({});
    setTouched({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (isFormValid) {
      console.log("Login successful with:", { email, password });
      onSubmit(email, password);

      if (email === 'user@example.com' && password === 'password123') {
        localStorage.setItem('isAuthenticated', 'true');
        alert("Login successful!");
        resetForm();
        navigate('/');
      } else {
        setErrors({ password: 'Invalid credentials' });
      }
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>

      <div className="mx-5 my-4 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_20px_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
        <div className="flex flex-col p-6">
          <h1 className="text-xl font-semibold leading-6 tracking-tighter">Login</h1>
          <p className="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.</p>

          <div className="p-6">
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="block text-sm font-medium text-green-500 mb-4">
                <label className='mb-2'>Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder="Enter your email"
                />
                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>

              <div className="block text-sm font-medium text-green-500 mb-4">
                <label className="mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleBlur('password')}
                  placeholder="Enter your password"
                />
                {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
              </div>

              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <input name="remember" type="checkbox" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <span className="ml-2 text-sm">Remember me</span>
                </label>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>

              <button
                className={`w-full font-medium py-2.5 rounded-lg transition-colors ${
                  isFormValid ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-600 opacity-50 text-white cursor-not-allowed'
                }`}
                disabled={!isFormValid}
              >
                Log In
              </button>
            </form>
          </div>

          <p className="text-sm">
            Don't have an account? <a className="text-indigo-400 hover:underline p-4" href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
