import { LICENCES } from '../../data/content';
import './collection.css';

/**
 * "The licence register": a real <table> for accessibility.
 * On narrow screens each row is restyled as a stacked card; the `data-label`
 * attributes supply the column names that the hidden header row would have given.
 */
export function LicenceRegister() {
  return (
    <section className="licence-register" aria-labelledby="register-title">
      <div className="container licence-register__inner">
        <div className="licence-register__heading-row">
          <h2 id="register-title" className="licence-register__heading">
            The licence register
          </h2>
          <p className="eyebrow">DETAILS TO BE CONFIRMED</p>
        </div>

        <table className="register">
          <colgroup>
            <col className="register__col register__col--ref" />
            <col className="register__col register__col--name" />
            <col className="register__col register__col--type" />
            <col className="register__col register__col--jurisdiction" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">REF.</th>
              <th scope="col">LICENCE / ASSET</th>
              <th scope="col">LICENCE TYPE</th>
              <th scope="col">JURISDICTION</th>
              <th scope="col">ASSET STAGE</th>
            </tr>
          </thead>
          <tbody>
            {LICENCES.map((licence) => (
              <tr key={licence.reference}>
                <td className="register__ref" data-label="Ref.">
                  {licence.reference}
                </td>
                <th scope="row" className="register__name" data-label="Licence / asset">
                  {licence.name}
                </th>
                <td data-label="Licence type">{licence.type}</td>
                <td data-label="Jurisdiction">{licence.jurisdiction}</td>
                <td data-label="Asset stage">{licence.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
