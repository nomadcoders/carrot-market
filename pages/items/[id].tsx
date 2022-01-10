import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div>
      <div>
        <div />
        <div>
          <div />
          <div>
            <p>Steve Jebs</p>
            <p>View profile &rarr;</p>
          </div>
        </div>
        <div>
          <h1>Galaxy S50</h1>
          <p>$140</p>
          <p>
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div>
            <button>Talk to seller</button>
            <button>
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Similar items</h2>
        <div>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div />
              <h3>Galaxy S60</h3>
              <p>$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
