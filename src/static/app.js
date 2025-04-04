// Example data structure for activities and participants
const activities = [
  {
    id: 1,
    name: "Basketball",
    description: "Join the basketball team and improve your skills.",
    participants: ["John Doe", "Jane Smith"],
  },
  {
    id: 2,
    name: "Drama Club",
    description: "Explore your acting talents in the drama club.",
    participants: ["Alice Johnson", "Bob Brown"],
  },
];

// Function to render activities and their participants
function renderActivities() {
  const activitiesList = document.getElementById("activities-list");
  activitiesList.innerHTML = ""; // Clear existing content

  activities.forEach((activity) => {
    // Create activity card
    const activityCard = document.createElement("div");
    activityCard.classList.add("activity-card");

    // Add activity name and description
    activityCard.innerHTML = `
      <h4>${activity.name}</h4>
      <p>${activity.description}</p>
      <div class="participants-section">
        <h5>Participants:</h5>
        <ul class="participants-list">
          ${activity.participants
            .map((participant) => `<li>${participant}</li>`)
            .join("")}
        </ul>
      </div>
    `;

    // Append activity card to the list
    activitiesList.appendChild(activityCard);
  });
}

// Call the function to render activities on page load
document.addEventListener("DOMContentLoaded", renderActivities);
