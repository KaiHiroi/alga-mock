import { VFC } from 'react';
import styled from 'styled-components';
import { Problems } from '../types/Types';
import { GiCycle } from 'react-icons/gi';
import { FaPen } from 'react-icons/fa';

type Props = {
  problemId: number;
};

const ProblemSolutions: VFC<Props> = (props) => {
  const problemId = props;

  const problems: Problems[] = [
    {
      id: 1,
      text: 'プロブレム１',
      solutions: [
        {
          id: 1,
          addingRules: '毎回Zoomに接続しながらboardを使う。Sol1',
          subCommitteeAndBudget:
            '部会と予算ぶかいとよさん\n部会と予算ぶかいとよさん\n部会と予算ぶかいとよさん\n',
          countDislike: 0,
          countLike: 0,
        },
        {
          id: 2,
          addingRules: '毎回Zoomに接続しながらboardを使う。Sol2',
          subCommitteeAndBudget: '部会と予算ぶかいとよさん',
          countDislike: 0,
          countLike: 0,
        },
      ],
    },
  ];
  const currentProblem = problems.find((problem) => {
    return problem.id === problemId.problemId;
  }) ?? {
    id: 0,
    text: 'no problem',
    solutions: [],
  };

  const currentSolution = currentProblem.solutions.find((solution) => {
    return solution.id === 1;
  }) ?? {
    id: 0,
    addingRules: 'solution 0',
    subCommitteeAndBudget: 'sub-Com & budget',
    countDislike: 0,
    countLike: 0,
  };

  const SolutionCardLi = styled.li`
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0 8px 5px rgb(0 0 0 / 0.1));
    :nth-child(1) {
      transform: scale(1) translateY(0);
      z-index: 3;
    }
    :nth-child(2) {
      transform: scale(0.96) translateY(4.5%);
      z-index: 2;
    }
    :nth-child(3) {
      transform: scale(0.94) translateY(8%);
      z-index: 1;
    }
    :not(:first-child) {
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
    }
  `;
  const SolutionId = styled.div`
    color: gray;
    padding: 0.35rem 0;
    box-shadow: 0 2px 5px lightgray;
  `;
  const SolutionMain = styled.div`
    flex: 0 0 1;
    overflow-y: auto;
    font-size: 1.1rem;
  `;
  const SolutionStatus = styled.div`
    color: gray;
    padding: 0.3rem 0;
    box-shadow: 0 -2px 5px lightgray;
  `;
  const StyledCycle = styled(GiCycle)`
    margin-right: 0.3rem;
  `;
  const StyledPen = styled(FaPen)`
    margin-right: 0.3rem;
  `;
  const InnerWrapper = styled.div`
    text-align: left;
    width: fit-content;
    margin: 0 auto;
  `;
  const Heading = styled.h3`
    color: #555;
  `;
  const Text = styled.div`
    padding-left: 1rem;
    color: #333;
    margin-bottom: 3rem;
  `;
  return (
    <>
      <SolutionCardLi>
        <SolutionId>
          ソリューション{currentSolution.id}/{currentProblem.solutions.length}
        </SolutionId>
        <SolutionMain>
          <InnerWrapper>
            <Heading>追加するルール</Heading>
            <Text>{currentSolution.addingRules}</Text>
            <Heading>部会と予算</Heading>
            <Text>
              {currentSolution.subCommitteeAndBudget}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
            </Text>
          </InnerWrapper>
        </SolutionMain>
        <SolutionStatus>
          {/* <StyledCycle /> */}
          <StyledPen />
          この解決策をベースに修正提案
        </SolutionStatus>
      </SolutionCardLi>
      <SolutionCardLi>
        <SolutionId>
          ソリューション{currentSolution.id}/{currentProblem.solutions.length}
        </SolutionId>
        <SolutionMain>
          <InnerWrapper>
            <Heading>追加するルール</Heading>
            <Text>{currentSolution.addingRules}</Text>
            <Heading>部会と予算</Heading>
            <Text>
              {currentSolution.subCommitteeAndBudget}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
            </Text>
          </InnerWrapper>
        </SolutionMain>
        <SolutionStatus>
          {/* <StyledCycle /> */}
          <StyledPen />
          この解決策をベースに修正提案
        </SolutionStatus>
      </SolutionCardLi>
      <SolutionCardLi>
        <SolutionId>
          ソリューション{currentSolution.id}/{currentProblem.solutions.length}
        </SolutionId>
        <SolutionMain>
          <InnerWrapper>
            <Heading>追加するルール</Heading>
            <Text>{currentSolution.addingRules}</Text>
            <Heading>部会と予算</Heading>
            <Text>
              {currentSolution.subCommitteeAndBudget}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              aaa
            </Text>
          </InnerWrapper>
        </SolutionMain>
        <SolutionStatus>
          {/* <StyledCycle /> */}
          <StyledPen />
          この解決策をベースに修正提案
        </SolutionStatus>
      </SolutionCardLi>
    </>
  );
};

export default ProblemSolutions;
