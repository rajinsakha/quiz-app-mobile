import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProfileDetails {
  id: number;
  user_id: number;
  profile_picture: string;
  location: string;
  user_type: string;
  agent_level: string;
  total_loyalty_bonus_earned: number;
  total_loyalty_bonus_withdrawn: number;
  remaining_loyalty: number;
  display_name: string | null;
  email: string;
  phone_number: string;
  refer_code: string;
}

type HomeState = {
  username: string;
  isPopoverClicked: boolean;
  email: string;
  profileDetails: IProfileDetails;
  refetch: boolean;
};

const initialState = {
  username: "",
  isPopoverClicked: false,
  email: "",
  profileDetails: {} as IProfileDetails,
  refetch: false,
} as HomeState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },

    setIsPopoverClicked: (state, action: PayloadAction<boolean>) => {
      state.isPopoverClicked = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setProfileDetails: (state, action) => {
      state.profileDetails = action.payload;
    },
    toggleRefetch: (state) => {
      state.refetch = !state.refetch;
    },
  },
});

export const {
  setUserName,
  setIsPopoverClicked,
  setEmail,
  setProfileDetails,
  toggleRefetch,
} = auth.actions;
export default auth.reducer;
