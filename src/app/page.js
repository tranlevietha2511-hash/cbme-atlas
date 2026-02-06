export default function HomePage() {
  return (
    <div className="card">
      <h2>Welcome</h2>
      <p>
        This is a JS-first skeleton for CBME Atlas. Use the role routes above to begin
        building dashboards and workflows.
      </p>
      <div className="grid">
        <div className="card">
          <h3>Curriculum</h3>
          <p>PLO–PI–CLO mapping, course/CLO upload, graph visualization.</p>
        </div>
        <div className="card">
          <h3>Rubrics & Assessment</h3>
          <p>Rubric authoring, teacher assessment, feedback moderation.</p>
        </div>
        <div className="card">
          <h3>QA & Analytics</h3>
          <p>Surveys, heatmaps, clustering, risk signals and reporting.</p>
        </div>
      </div>
    </div>
  );
}
