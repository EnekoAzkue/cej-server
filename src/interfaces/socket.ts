import {
  SocketServerToClientEvents,
  SocketClientToServerEvents,
} from "../constants";

// Declaration of the events used when sending and broadcasting events to the client
interface ServerToClientEvents {
  [SocketServerToClientEvents.ACOLYTE_DISCONNECTED]: (
    acolyteEmail: string
  ) => void;
}

// Declaration of the events used when receiving events from the client
interface ClientToServerEvents {
  [SocketClientToServerEvents.CONNECTION_OPEN]: (userEmail: string) => void;
}

interface FieldsToUseInDisconnection {
  socketId: string;
  isInside?: boolean;
}

export type {
  ServerToClientEvents,
  ClientToServerEvents,
  FieldsToUseInDisconnection,
};
