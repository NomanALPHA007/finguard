// /app/profile/page.tsx
import { FC } from "react";
import TokenRewards from "@/components/TokenRewards";

const ProfilePage: FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <div className="mt-4">
        <p>View and manage your token rewards and stats here.</p>
        <TokenRewards />
      </div>
    </div>
  );
};

export default ProfilePage;
