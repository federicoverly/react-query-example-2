export interface IHouse {
  animal: string;
  commonRoom: string;
  element: string;
  founder: string;
  ghost: string;
  heads: ICharacter[];
  houseColours: string;
  id: string;
  name: string;
  traits: ITraits[];
}

export interface ICharacter {
  id: string;
  firstName: string;
  lastName: string;
}

export interface ITraits {
  id: string;
  name: string;
}

export interface IFeedback {
  feedbackType: string;
  feedback: string;
  entityId: string;
}
