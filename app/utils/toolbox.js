const slugify = (title) => {
  return title.trim().toLowerCase().replace(/\s+/g, "-");
};

const except = (text, limit = 100) => {
  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }
  return text;
};

module.exports = {
  slugify,
  except,
};
