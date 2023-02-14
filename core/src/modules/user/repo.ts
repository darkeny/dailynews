import { deleteUserArgs, findUserArgs, saveUserArgs, updateUserArgs, userRepository } from "./types";

export class AbstractUserRepo implements userRepository {
    constructor() {

    }
    save(params: saveUserArgs): Promise<{ id: string; email: string; name: string; }> {
        throw new Error("Method not implemented.");
    }
    delete(params: deleteUserArgs): Promise<{ id: string; email: string; name: string; }> {
        throw new Error("Method not implemented.");
    }
    update(params: updateUserArgs): Promise<{ id: string; email: string; name: string; }> {
        throw new Error("Method not implemented.");
    }
    find(query: findUserArgs): Promise<{ id: string; email: string; name: string; }> {
        throw new Error("Method not implemented.");
    }

}