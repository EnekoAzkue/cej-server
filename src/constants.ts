enum SocketServerToClientEvents {
  ACOLYTE_INSIDE_OUTSIDE_LAB = "acolyte inside/outside lab",
  ACOLYTE_DISCONNECTED = "acolyte disconnected",
}

enum SocketClientToServerEvents {
  CONNECTION_OPEN = "connection open",
  ACCESS_TO_EXIT_FROM_LAB = "access to/exit from lab",
}

export { SocketServerToClientEvents, SocketClientToServerEvents };
