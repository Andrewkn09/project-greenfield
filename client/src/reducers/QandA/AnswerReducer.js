const AnswerReducer = (
  state = {
    question: '1',
    page: 0,
    count: 5,
    results: [
      {
        answer_id: 8,
        body: 'What a great question!',
        date: '2018-01-04T00:00:00.000Z',
        answerer_name: 'metslover',
        helpfulness: 8,
        photos: [],
      },
      {
        answer_id: 5,
        body: "Something pretty durable but I can't be sure",
        date: '2018-01-04T00:00:00.000Z',
        answerer_name: 'metslover',
        helpfulness: 5,
        photos: [
          {
            id: 1,
            url: 'urlplaceholder/answer_5_photo_number_1.jpg',
          },
          {
            id: 2,
            url: 'urlplaceholder/answer_5_photo_number_2.jpg',
          },
        ],
      },
    ],
  },
  { type, payload }
) => {
  switch (type) {
    case 'GET_ANSWERS':
      console.log(type);
      return Object.assign({}, state, payload);
    case 'POST_ANSWER':
      return payload;
    case 'VOTE_ANSWER':
      return payload;
    case 'REPORT_ANSWER':
      return payload;
    default:
      return state;
  }
};
export default AnswerReducer;
