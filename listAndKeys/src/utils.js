
function getImageUrl(person) {
  return (
    'https://i.imgur.com/' + person.imageId + '.jpg'
  );
};

export default getImageUrl;