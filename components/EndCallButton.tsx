import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

import { Button } from "./ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipants = useLocalParticipant();

  const isMeetingOwner =
    localParticipants &&
    call?.state.createdBy &&
    localParticipants.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <Button
      onClick={async () => {
        await call.endCall();
        router.push("/");
      }}
      className="bg-red-500 hover:bg-red-400 focus-visible:ring-0 focus-visible:ring-offset-0"
    >
      End Call for everyone
    </Button>
  );
};

export default EndCallButton;
