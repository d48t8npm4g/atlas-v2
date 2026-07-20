export default function LoginForm() {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B]">
  
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />
  
        {/* Login Card */}
        <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
  
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-black tracking-wide text-white">
              ATLAS
            </h1>
  
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-blue-400">
              Factory Operating System
            </p>
          </div>
  
          <form className="space-y-6">
  
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Email
              </label>
  
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />
            </div>
  
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Password
              </label>
  
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />
            </div>
  
            <div className="flex items-center justify-between text-sm">
  
              <label className="flex items-center gap-2 text-zinc-400">
                <input type="checkbox" />
                Remember me
              </label>
  
              <button
                type="button"
                className="text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </button>
  
            </div>
  
            <button
              type="submit"
              className="mt-2 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
            >
              Sign In
            </button>
  
          </form>
  
        </div>
  
      </main>
    );
  }