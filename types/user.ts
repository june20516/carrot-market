import Item from './Item';

type User = {
  id: string;
  name: string;
  image?: string;
  boughtItems?: Item[];
  soldItems?: Item[];
  interestedItems?: Item[];
};

export default User;
