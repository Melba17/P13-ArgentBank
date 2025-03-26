import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { updateUserProfile, getUserProfile } from '../../service/Api'; 
import './style.css';

/**
 * 🔹 Composant UserHeader
 * - Affiche le prénom et le nom de l'utilisateur.
 * - Permet la modification du prénom et du nom.
 * - Met à jour Redux et l'API après modification.
 *
 * @component
 * @returns {JSX.Element} - Le composant UserHeader.
 */
function UserHeader() {
  const dispatch = useDispatch();
  const { token, firstName, lastName } = useSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [error, setError] = useState('');

  // 🔹 Fonction pour sauvegarder les modifications
  async function handleSave() {
    try {
      setError('');
      // 🔹 Met à jour sur l'API
      await updateUserProfile(newFirstName, newLastName); 

      // 🔹 Récupérer les infos à jour après la mise à jour
      const updatedUser = await getUserProfile(); 

      // 🔹 Mettre Redux à jour avec les nouvelles infos
      dispatch(setUser({ token, ...updatedUser }));

      setIsEditing(false);
    } catch (error) {
      setError(error.response?.data?.message || 'An error has occurred. Please try again later.');
    }
  }

  return (
    <section className="welcome">
      <h1>
        Welcome back
        <br />
        {isEditing ? (
          <>
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              className="edit-input"
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              className="edit-input"
            />
          </>
        ) : (
          `${firstName} ${lastName} !`
        )}
      </h1>
      {isEditing ? (
        <div className="button-group">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
      )}
      {error && <p className="error-message">{error}</p>}
    </section>
  );
}

export default UserHeader;
