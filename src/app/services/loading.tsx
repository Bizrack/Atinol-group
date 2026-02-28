import { PageLoader } from "@/components/ui/Loader";

export default function ServicesLoading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center pt-24">
      <PageLoader />
    </div>
  );
}
