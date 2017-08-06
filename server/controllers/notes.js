const Note = require('mongoose').model('Note')

module.exports = {
  index(request, response) {
    console.log('retrieving notes');
    Note.find({})
      .then(function (notes){
        console.log(notes);
        response.json(notes);
      })
      .catch(function (errors){
        console.log(errors);
      })
  },
  create(request, response) {
    const note = new Note(request.body);
    console.log(`created new note: ${note}`);
    note.save()
      .then(function (note){
        console.log(`saved ${note}`);
        response.json(note);
      })
      .catch(function (errors){
        console.log(errors)
      })
  },

}