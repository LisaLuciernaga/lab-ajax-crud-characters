class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({ baseUrl: baseUrl });
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return this.api
      .get("/characters")
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        console.log("unable to get full list");
      });
  }

  getOneRegister(id) {
    return this.api
      .get(`/characters/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return "Character not found";
      });
  }

  createOneRegister(newCharacter) {
    return this.api.post("/characters", newCharacter).then(() => {});
  }

  updateOneRegister(id, editedCharacter) {
    return this.api
      .put(`${this.BASE_URL}/characters/${id}`, editedCharacter)
      .then(() => {
        return "Character has been updated";
      })
      .catch(() => "Character not found");
  }

  updateOneRegister(id) {
    return this.api
      .put(`${this.BASE_URL}/characters/${id}`, editedCharacter)
      .then(() => {
        console.log("Character has been successfully updated");
        return "Character has been successfully updated";
      })
      .catch(() => "Character not found");
  }

  deleteOneRegister(id) {
    return this.api
      .delete(`/characters/${id}`)
      .then(() => {
        return "Character has been deleted";
      })
      .catch(() => "Character not found");
  }
}
