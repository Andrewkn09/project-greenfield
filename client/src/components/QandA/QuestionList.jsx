//Dev Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions/QandA/getQuestions';
// import postQuestion from '../../actions/QandA/postQuestion';
// import voteQuestion from '../../actions/QandA/voteQuestion';
// import reportQuestion from '../../actions/QandA/reportQuestion';

//React Components
import Question from './Question';

//Material Componenets
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class Questions extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.productId !== prevProps.productId ||
      this.props.searchKeyword !== prevProps.searchKeyword
    ) {
      this.props.getQuestions(
        this.props.productId,
        1,
        4,
        this.props.searchKeyword
      );
    }
  }

  render() {
    if (this.props.questions.results.length > 0) {
      return (
        <div>
          {this.props.questions.results.map(question => {
            if (question.answers !== undefined) {
              return (
                <Question
                  question={question}
                  key={question.question_id}
                  product={this.props.productName}
                />
              );
            }
          })}
        </div>
      );
    } else {
      return <div>Add questions</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    productId: state.productId,
    searchKeyword: state.searchKeyword,
    questions: state.questions,
    productName: state.product.name,
  };
};

const QuestionList = connect(
  mapStateToProps,
  { getQuestions }
)(Questions);

export default QuestionList;
