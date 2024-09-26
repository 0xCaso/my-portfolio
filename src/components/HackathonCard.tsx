interface HackathonCardProps {
  project: string;
  hackathon: string;
  date: string;
  location: string;
  description: string;
  tags?: string[];
  github?: string;
  website?: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  project,
  hackathon,
  date,
  location,
  description,
  tags,
  github,
  website,
}) => {
  return (
    <div className="h-full w-full rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-400 hover:bg-opacity-10 border border-zinc-800 hover:border-opacity-0 hover:scale-[101%]">
      <div className="card rounded-xl flex flex-col gap-8 h-full transition-all duration-300">
        <div className="text-center text-zinc-400 text-sm flex flex-col gap-1">
          <h3 className="text-2xl font-['Ribes_Regular'] text-zinc-100">
            {project}
          </h3>
          <p className="text-lg text-zinc-300 font-bold">{hackathon}</p>
          <p>{date}</p>
          <p>{location}</p>
        </div>
        <p className="text-sm text-zinc-300 text-center flex-grow">
          {description}
        </p>
        {tags && (
          <div className="flex flex-wrap gap-2 justify-center mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* Add links for GitHub and website if provided */}
        <div className="flex justify-center gap-4 mt-4">
          {github && (
            <a href={github} className="text-blue-500 underline">
              GitHub
            </a>
          )}
          {website && (
            <a href={website} className="text-blue-500 underline">
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
