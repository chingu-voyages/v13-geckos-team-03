import React from "react";
import styled from "styled-components";

import ResultCard from "./ResultCard";

const Container = styled.div`
  margin: 0 auto;
  min-height: 900px;
  width: 940px;
`;

function Results() {
  return (
    <Container>
      <ResultCard
        poster="https://image.tmdb.org/t/p/w300/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
        title="Lion King"
        year="1994"
        rating="9.6"
        votes={19930}
        summary="This Disney animated feature follows the adventures of the young lion Simba (Jonathan Taylor Thomas), the heir of his father, Mufasa (James Earl Jones). Simba's wicked uncle, Scar (Jeremy Irons), plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests. But Simba escapes, and only Mufasa is killed. Simba returns as an adult (Matthew Broderick) to take back his homeland from Scar with the help of his friends Timon (Nathan Lane) and Pumbaa (Ernie Sabella)."
      />
      <ResultCard
        poster="https://image.tmdb.org/t/p/w300/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
        title="Lion King 2"
        year="1998"
        rating="4.3"
        votes={253}
        summary="Simba and Nala have a daughter, Kiara. Timon and Pumbaa are assigned to be her babysitters, but she easily escapes their care and ventures into the forbidden lands. There she meets a lion cub named Kovu and they become friends. What she and her parents do not know is that Kovu is the son of Zira - a banished follower of the now-dead Scar. She plans to raise Kovu to overthrow Simba and become the king of the Pride Lands. This tests not only Kiara and Kovu's relationship as they mature, but Simba's relationship with his daughter."
      />
    </Container>
  );
}

export default Results;
