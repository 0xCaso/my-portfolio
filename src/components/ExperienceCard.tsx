import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  company: string;
  type: string;
  date: string;
  location: string;
  description: string;
  image: string;
  skills?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  type,
  date,
  location,
  description,
  image,
  skills,
}) => {
  return (
    <div className="border border-zinc-700 h-fit w-full rounded-2xl p-1 transition-all duration-300 hover:border-transparent">
      <div className="card rounded-xl p-8 flex flex-col gap-6 h-fit transition-all duration-300 hover:bg-zinc-300 hover:bg-opacity-10 hover:scale-[101%]">
        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center p-1 border border-zinc-700 rounded-full">
            <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
              <div className="w-full h-full scale-[102%]">
                <Image
                  src={"/assets/img" + image}
                  alt={company}
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className="flex-grow text-right">
            <h3 className="text-3xl mb-2 font-['Ribes_Regular'] text-zinc-100">
              {title}
            </h3>
            <p className="text-xl text-zinc-300 font-bold">
              {company}
              {/* · {type} */}
            </p>
            <p className="text-lg text-zinc-400">{date}</p>
            <p className="text-lg text-zinc-400">{location}</p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-zinc-300">{description}</p>
          {skills && (
            <div className="flex flex-wrap gap-2 justify-start">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
