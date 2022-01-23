export const ProposalQuery = `
  query {
    proposals{
      id
      problem{
        text
      }
      harm
      cause
      solutions {
        id
        law
        to
        since
        until
        amount
        members {
          id
          address
        }
      }
    }
  }
`;

export const ProblemTextQuery = (proposalId: number) => `
  query {
    proposal(id: ${proposalId}){
      problem{
        text
      }
    }
  }
`;

export const SolutionsQuery = (proposalId: number) => `
  query {
    proposal(id: ${proposalId}){
      solutions{
        id
        law
        to
        since
        until
        amount
        members{
          id
          address
        }
      }
    }
  }
`;
