import { timeline } from "@/const/timeline";
import TimelineItem from "@/components/ui/TimelineItem";
export const Timeline: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-3xl mb-4">Our Journey</h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            Discover the journey of Rising Star Boys Hostel – from its
            foundation in 2018 to becoming a trusted home for students in
            Kathmandu, continuously evolving to provide the best living
            experience.
          </p>
        </div>
        <TimelineItem items={timeline} />
      </div>
    </>
  );
};
