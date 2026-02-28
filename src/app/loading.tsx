import { PageLoader } from "@/components/ui/Loader";

export default function RootLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <PageLoader />
    </div>
  );
}
