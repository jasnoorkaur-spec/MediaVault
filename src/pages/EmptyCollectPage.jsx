import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCollectPage = () => {

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center mt-20 text-center">

      {/* Icon */}
      <div className="relative mb-7">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-500/20 bg-violet-500/10 shadow-2xl shadow-violet-900/20">
          <Heart size={40} className="text-violet-400"/>
        </div>

        {/* Small sparkle above heart icon */}
        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600">
          <Sparkles size={15} />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold tracking-tight text-white">
        Your collection is empty
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-slate-400">
        You haven't saved anything yet. Explore photos, videos
        and GIFs and save your favorites to find them here.
      </p>

      {/* Button */}
      <Link to='/'
        className="mt-7 flex items-center gap-2 rounded-xl bg-violet-600/80 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500/80 hover:shadow-lg hover:shadow-violet-500/30">
        <Sparkles size={18} /> Explore Media
      </Link>

    </div>
  )}

export default EmptyCollectPage