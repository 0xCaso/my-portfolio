import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface HackathonCardProps {
  project: string;
  hackathon: string;
  date: string;
  location: string;
  description: string;
  tags?: string[];
  github?: string;
  website?: string;
  image?: string;
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
  image,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full w-full rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-400 hover:bg-opacity-10 border border-zinc-800 hover:border-opacity-0 hover:scale-[101%] hover:cursor-pointer">
          <div className="card rounded-xl flex flex-col gap-8 h-full transition-all duration-300">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 outline outline-zinc-800 outline-offset-4">
                <Image
                  src={"/assets/img" + image}
                  alt={project}
                  width={120}
                  height={120}
                  className="scale-[102%]"
                />
              </div>
            </div>
            <div className="text-center text-zinc-400 text-sm flex flex-col gap-1">
              <h3 className="text-2xl font-['Ribes_Regular'] text-zinc-100">
                {project}
              </h3>
              <p className="text-lg text-zinc-300 font-bold">{hackathon}</p>
              <p>{date}</p>
              <p>{location}</p>
            </div>
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
                <Link
                  href={github}
                  className="text-blue-500 underline"
                  target="_blank"
                >
                  GitHub
                </Link>
              )}
              {website && (
                <Link
                  href={website}
                  className="text-blue-500 underline"
                  target="_blank"
                >
                  Website
                </Link>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Description</DialogTitle>
          <DialogDescription>
            <p className="text-sm text-zinc-300 text-center flex-grow">
              {description}
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HackathonCard;
