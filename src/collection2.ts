//  collection of phone numbers
//  index types
// here arbitrary key have dfferent types of values

const phone: {
  [k: string]:
    | {
        country: string;
        area: string;
        number: string;
      }
    | undefined;
} = {};

const phones = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  fax: { country: "+1", area: "322", number: "525-4357" },
};
