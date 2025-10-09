import { Socket } from "socket.io";
import User from "../../database/userDatabase";
import USER_ROLES from "../../roles/roles";
import { FieldsToUseInDisconnection } from "../../interfaces/socket";
import {
  SocketServerToClientEvents,
  SocketClientToServerEvents,
} from "../../constants";

function handleConnection(socket: Socket) {
  console.log("Client connected to the server socket.");

  socket.on(
    SocketClientToServerEvents.CONNECTION_OPEN,
    handleConnectionOpening
  );

  socket.on("disconnect", () => {
    handleDisconnection(socket);
  });
}

async function handleConnectionOpening(userEmail: string) {
  console.log(`User with email ${userEmail} opened connection`);
}

async function handleDisconnection(socket: Socket) {
  console.log("Client disconnected from the server socket.");

  const fieldToFilterBy: FieldsToUseInDisconnection = { socketId: socket.id };
  const changesToApply: FieldsToUseInDisconnection = { socketId: "" };

  const socketUser = await User.getUserByField(fieldToFilterBy);
  const isSocketUserAcolyte = socketUser?.rol === USER_ROLES.ACOLYTE;

  if (isSocketUserAcolyte) {
    changesToApply.isInside = false;

    const mortimer = await User.getUserByField({
      rol: USER_ROLES.MORTIMER,
    });
    const mortimerSocketId = mortimer?.socketId;

    if (mortimerSocketId) {
      socket
        .to(mortimerSocketId)
        .emit(
          SocketServerToClientEvents.ACOLYTE_DISCONNECTED,
          socketUser.email
        );
    }
  }

  await User.updateUserByField(fieldToFilterBy, changesToApply);
}

export default handleConnection;
