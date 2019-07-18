import axios from 'axios';

//url for get questions and post question - pass in a product id
const urlByProduct = 'http://18.222.40.124/qa/';

//json format for posting question
const questionObject = {
  body: 'test question to product 1',
  name: 'Xiao',
  email: 'xiaoxie.ny@gmail.com',
};
//url for vote and report question - pass in a question id and action
const urlByQuestion = 'http://18.222.40.124/qa/question/';
//Mark Question as Helpful (by qustion id)
//PUT http://18.222.40.124/qa/question/55/helpful
//Report Question (by question id)
//PUT http://18.222.40.124/qa/question/56/report

const QuestionReducer = (
  state = {
    product_id: '5',
    results: [
      {
        question_id: 37,
        question_body: 'Why is this product cheaper here than other sites?',
        question_date: '2018-10-18T00:00:00.000Z',
        asker_name: 'williamsmith',
        question_helpfulness: 4,
        reported: 0,
        answers: {
          68: {
            id: 68,
            body:
              'We are selling it here without any markup from the middleman!',
            date: '2018-08-18T00:00:00.000Z',
            answerer_name: 'Seller',
            helpfulness: 4,
            photos: [],
            // ...
          },
        },
      },
      {
        question_id: 38,
        question_body: 'How long does it last?',
        question_date: '2019-06-28T00:00:00.000Z',
        asker_name: 'funnygirl',
        question_helpfulness: 2,
        reported: 0,
        answers: {
          70: {
            id: 70,
            body:
              'Some of the seams started splitting the first time I wore it!',
            date: '2019-11-28T00:00:00.000Z',
            answerer_name: 'sillyguy',
            helpfulness: 6,
            photos: [],
          },
          78: {
            id: 78,
            body: '9 lives',
            date: '2019-11-12T00:00:00.000Z',
            answerer_name: 'iluvdogz',
            helpfulness: 31,
            photos: [],
          },
        },
      },
    ],
  },
  { type, payload }
) => {
  switch (type) {
    case 'GET_QUESTIONS':
      return Object.assign({}, state, payload);
    case 'POST_QUESTION':
      return payload;
    case 'VOTE_QUESTION':
      return payload;
    case 'REPORT_QUESTION':
      return payload;
    default:
      return state;
  }
};
export default QuestionReducer;
