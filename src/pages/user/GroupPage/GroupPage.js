import React from "react";
import MainContext from "../../../contexts/main.context";
import { LogService } from "../../../services/LogService";
import "./style.scss";
import { withErrorBoundary } from "../../../components/hoc/withErrorBoundary/withErrorBoundary";
import { WordDBService } from "../../../services/WordDBService";
import WordsTable from "../../../components/WordsTable/WordsTable";
import { withRouter } from "react-router";

const GroupPage = ({ match }) => {
  const [words, setWords] = React.useState(null);
  const { user } = React.useContext(MainContext);

  // todo load by limit
  // https://stackoverflow.com/questions/50922417/how-to-paginate-or-infinite-scroll-by-number-of-items-in-firestore

  React.useEffect(() => {
    const getWords = async (groupId) => {
      try {
        const words = await WordDBService.getGroupWords(user, groupId);
        setWords(words);
      } catch (e) {
        LogService.showAndLogError("get words error", e);
      }
    };
    if (match.params.id && user) {
      getWords(match.params.id);
    }
  }, [match.params.id, user]);

  if (!words) return null;
  if (Array.isArray(words) && !words.length) {
    return <span>No words in this group</span>;
  }

  return (
    <div className="GroupPage">
      <WordsTable words={words} />
    </div>
  );
};

export default withRouter(withErrorBoundary(GroupPage));
